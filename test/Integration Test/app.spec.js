describe('routes books', () => {
    const defaultBook = {
        id: 1,
        name:  'Default Book',
    };
    describe('route GET /books', () => {
        it('should return a list of books', done => {
            request
                // vai fazer um request na /books
                .get('/books')
                    // espera erro ou espera resposta
                .end(err, res) => {
                    // primeiro indice do array de resposta do servidor seja igual defaultbook.name
                    expect(res.body[0].name).to.be.equal(defaultBook.name);
                    expect(res.body[0].id).to.be.equal(defaultBook.id)
                    done(err);
                };
        });

    });
});