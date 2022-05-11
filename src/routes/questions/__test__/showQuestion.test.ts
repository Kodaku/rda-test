import request from "supertest";

it("require all questions in the database", async () => {
    const response = await request("http://host.docker.internal:5000")
        .get("/api/questions")
        .send({})
        .expect(200);

    // console.log(response.body);
});

it("require a specific question in the database", async () => {
    const response = await request("http://host.docker.internal:5000")
        .get("/api/questions/1")
        .send({})
        .expect(200);

    // console.log(response.body);
});
