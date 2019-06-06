

exports.getdo = (req, res, next) =>{
    res.render('index');
}

exports.about = (req, res, next) =>{
    res.render('about');
}

exports.postdata = (req, res, next) =>{
    //const title = JSON.stringify(req.body)
    var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
     res.send(req.body);
}