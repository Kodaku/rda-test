import request from "supertest";

it("create a user and then a quiz with 20 random questions. Finally it deletes everything", async () => {
    const userResponse = await request("http://host.docker.internal:5000")
        .post("/api/users/add")
        .send({
            firebaseId: "923482",
            userName: "test user",
            email: "test@test.com",
        })
        .expect(201);

    const userId = userResponse.body.user.id;

    console.log(userResponse.body.user.id);

    const quizResponse = await request("http://host.docker.internal:5000")
        .get(`/api/quiz/generic/${userId}`)
        .send({})
        .expect(200);

    const quizId = quizResponse.body.quiz.id;

    await request("http://host.docker.internal:5000")
        .get(`/api/quiz/delete/${quizId}`)
        .send({})
        .expect(200);

    await request("http://host.docker.internal:5000")
        .get(`/api/users/delete/${userId}`)
        .send({})
        .expect(200);
});
