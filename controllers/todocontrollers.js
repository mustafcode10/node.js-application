module.exports = function(app){
    app.get('/todo', function(req, res){
        // res.render('todo')
        // res.send('hhhhh uuuu')
        res.render('todo.ejs')
    });

    app.post('/todo', function(req, res){

    });
    
    app.delete('/todo', function(req, res){

    })
}