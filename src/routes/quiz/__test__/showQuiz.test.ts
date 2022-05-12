import request from "supertest";
import { BASE_URL } from "../../../constants";

it("creates a user and a quiz to be associated to the user. Then it shows the quiz created and finally it deletes everything", async () => {
    const userResponse = await request(BASE_URL)
        .post("/api/users/add")
        .send({
            firebaseId: "923481",
            userName: "test user 2",
            email: "test2@test.com",
        })
        .expect(201);

    const userId = userResponse.body.user.id;

    console.log(userResponse.body.user.id);

    const quizResponse = await request(BASE_URL)
        .get(`/api/quiz/generic/${userId}`)
        .send({})
        .expect(200);

    const quizId = quizResponse.body.quiz.id;

    await request(BASE_URL)
        .get(`/api/quiz/${quizId}`)
        .send({})
        .expect(200);

    await request(BASE_URL)
        .get(`/api/quiz/delete/${quizId}`)
        .send({})
        .expect(200);

    await request(BASE_URL)
        .get(`/api/users/delete/${userId}`)
        .send({})
        .expect(200);
});
