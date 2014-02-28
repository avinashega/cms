var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
	var locals = res.locals;
	locals.section = 'findus';
	var view = new keystone.View(req, res);	
	view.render('findus');
	
}
