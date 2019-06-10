

exports.getdo = (req, res, next) =>{
    res.render('index', {index:true, about:false, research:false, admissions:false, news:false,  academics:false});
}

exports.about = (req, res, next) =>{
    res.render('about',{index:false, about:true, research:false, admissions:false, news:false, academics:false});
}
exports.academics = (req, res, next) =>{
    res.render('academics',{index:false, about:false, research:false, admissions:false, news:false, academics:true});
}


exports.research = (req, res, next) =>{
    res.render('research',{index:false, about:false, research:true, admissions:false, news:false,  academics:false});
}

exports.admissions = (req, res, next) => {
    res.render('admissions',{index:false, about:false, research:false, admissions:true, news:false,  academics:false});
}

exports.news = (req, res, next) =>{
    res.render('news',{index:false, about:false, research:false, admissions:false, news:true,  academics:false});
}
    
exports.postdata = (req, res, next) =>{
    //const title = JSON.stringify(req.body)
    var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
     res.send(req.body);
}