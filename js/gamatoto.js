module.exports = class extends require('./base.js') {
	run({minify = false}) {
		const members = this.parse_tsv(this.load('gamatoto.tsv'));
		this.write_template('html/gamatoto.html', 'gamatoto.html', {members}, minify);
	}
};
