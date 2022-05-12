import request from "supertest";
import { BASE_URL } from "../../../constants";

it("create a user and then a quiz with 20 random questions. Finally it deletes everything", async () => {
    const userResponse = await request(BASE_URL)
        .post("/api/users/add")
        .send({
            firebaseId: "923482",
            userName: "test user",
            email: "test@test.com",
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
        .get(`/api/quiz/delete/${quizId}`)
        .send({})
        .expect(200);

    await request(BASE_URL)
        .get(`/api/users/delete/${userId}`)
        .send({})
        .expect(200);
});
