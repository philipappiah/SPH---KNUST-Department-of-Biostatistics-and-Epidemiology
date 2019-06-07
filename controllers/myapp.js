

exports.getdo = (req, res, next) =>{
    res.render('index');
}

exports.about = (req, res, next) =>{
    res.render('about');
}
exports.academics = (req, res, next) =>{
    res.render('academics');
}


exports.research = (req, res, next) =>{
    res.render('research');
}

exports.admissions = (req, res, next) => {
    res.render('admissions');
}

exports.news = (req, res, next) =>{
    res.render('news');
}
    
exports.postdata = (req, res, next) =>{
    //const title = JSON.stringify(req.body)
    var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
     res.send(req.body);
}