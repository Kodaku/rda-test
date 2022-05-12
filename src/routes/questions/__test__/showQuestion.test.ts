import request from "supertest";
import { BASE_URL } from "../../../constants";

it("require all questions in the database", async () => {
    const response = await request(BASE_URL)
        .get("/api/questions")
        .send({})
        .expect(200);

    // console.log(response.body);
});

it("require a specific question in the database", async () => {
    const response = await request(BASE_URL)
        .get("/api/questions/1")
        .send({})
        .expect(200);

    // console.log(response.body);
});
