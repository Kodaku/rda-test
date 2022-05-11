import request from "supertest";

it("create, update and delete a question", async () => {
    // Create the question
    const response = await request("http://host.docker.internal:5000")
        .post("/api/questions/add")
        .send({
            questionId: 801,
            questionText: "Test question",
            questionCategory: "Regola 1",
            wrongOptions: [
                "1.3X38AP8SZ336T4P5V6WU9ZARZGCBH4E6",
                "2.3SQ9RNRAC119OJBK74L20IY5LH69Q",
            ],
            correctOptions: "3.dkejekljflrjflwj",
            questionOptions: [
                "1.3X38AP8SZ336T4P5V6WU9ZARZGCBH4E6",
                "2.3SQ9RNRAC119OJBK74L20IY5LH69Q",
                "3.dkejekljflrjflwj",
            ],
            answerLink: "link",
        })
        .expect(201);

    // console.log(response.body);

    //Update the question
    const updateResponse = await request("http://host.docker.internal:5000")
        .post("/api/questions/801")
        .send({
            questionId: 801,
            questionText: "Test question Updated",
            questionCategory: "Regola 2",
            wrongOptions: [
                "1.3X38AP8SZ336T4P5V6WU9ZARZGCBH4E6",
                "2.3SQ9RNRAC119OJBK74L20IY5LH69Q",
            ],
            correctOptions: "3.dkejekljflrjflwj",
            questionOptions: [
                "1.3X38AP8SZ336T4P5V6WU9ZARZGCBH4E6",
                "2.3SQ9RNRAC119OJBK74L20IY5LH69Q",
                "3.dkejekljflrjflwj",
            ],
            answerLink: "new link to laws of the game",
        })
        .expect(200);

    // console.log(updateResponse.body);

    //Delete the question
    const deleteResponse = await request("http://host.docker.internal:5000")
        .get("/api/questions/delete/801")
        .send({})
        .expect(200);

    // console.log(deleteResponse.body);
});
