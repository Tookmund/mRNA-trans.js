//data for bases
var acids = {
	uuu: "phe",
	uuc: "phe",
	uua: "leu",
	uug: "leu",
	ucu: "ser",
	ucc: "ser",
	uca: "ser",
	ucg: "ser",
	uau: "tyr",
	uac: "tyr",
	uaa: "stop",
	uag: "stop",
	ugu: "cys",
       	ugc: "cys",
	uga: "stop",
	ugg: "trp",
	cuu: "leu",
	cuc: "leu",
	cua: "leu",
	cug: "leu",
	ccu: "pro",
	ccc: "pro",
	cca: "pro",
	ccg: "pro",
	cau: "his",
	cac: "his",
	caa: "gln",
	cag: "gln",
	cgu: "arg",
	cgc: "arg",
	cga: "arg",
	cgg: "arg",
	auu: "ile",
	auc: "ile",
	aua: "ile",
	aug: "met",
	acu: "thr",
	acc: "thr",
	aca: "thr",
	acg: "thr",
	aau: "asn",
	aac: "asn",
	aaa: "lys",
	aag: "lys",
	agu: "ser",
	agc: "ser",
	aga: "arg",
	agg: "arg",
	guu: "val",
	guc: "val",
	gua: "val",
	gug: "val",
	gcu: "ala",
	gcc: "ala",
	gca: "ala",
	gcg: "ala",
	gau: "asp",
	gac: "asp",
	gaa: "glu",
	gag: "glu",
	ggu: "gly",
	ggc: "gly",
	gga: "gly",
	ggg: "gly"
};
function translate (mrna) {
	var MRNA = mrna.toUpperCase();
	var codons  = MRNA.split(" ");
	var proteins;
	for (var i = 0; i < codons {
		if(!acids[bases[i]]) {
			protien += "ERROR";
		}
		else {
			protiens += acids[bases[i]];
	}
}
