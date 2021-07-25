
export function add_users_routes(app) {

    app.get('/users', (req, res) => {
        return res.send('Received a GET HTTP method');
    });
    app.post('/users', (req, res) => {
        return res.send('Received a POST HTTP method');
    });
    app.put('/users', (req, res) => {
        return res.send('Received a PUT HTTP method');
    });
    app.delete('/users', (req, res) => {
        return res.send('Received a DELETE HTTP method');
    });

}
