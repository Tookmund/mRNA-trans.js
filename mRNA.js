//data for bases
var acids = {
	uuu: "Phenylalanine",
	uuc: "Phenylalanine",
	uua: "Leucine",
	uug: "Leucine",
	ucu: "Serine",
	ucc: "Serine",
	uca: "Serine",
	ucg: "Serine",
	uau: "Tyrosine",
	uac: "Tyrosine",
	uaa: "Stop",
	uag: "Stop",
	ugu: "Cysteine",
       	ugc: "Cysteine",
	uga: "Stop",
	ugg: "Tryptophan",
	cuu: "Leucine",
	cuc: "Leucine",
	cua: "Leucine",
	cug: "Leucine",
	ccu: "Proline",
	ccc: "Proline",
	cca: "Proline",
	ccg: "Proline",
	cau: "Histidine",
	cac: "Histidine",
	caa: "Glutamine",
	cag: "Glutamine",
	cgu: "Arginine",
	cgc: "Arginine",
	cga: "Arginine",
	cgg: "Arginine",
	auu: "Isoleucine",
	auc: "Isoleucine",
	aua: "Isoleucine",
	aug: "Methionine",
	acu: "Threonine",
	acc: "Threonine",
	aca: "Threonine",
	acg: "Threonine",
	aau: "Asparagine",
	aac: "Asparagine",
	aaa: "Lysine",
	aag: "Lysine",
	agu: "Serine",
	agc: "Serine",
	aga: "Arginine",
	agg: "Arginine",
	guu: "Valine",
	guc: "Valine",
	gua: "Valine",
	gug: "Valine",
	gcu: "Alanine",
	gcc: "Alanine",
	gca: "Alanine",
	gcg: "Alanine",
	gau: "Aspartic Acid",
	gac: "Aspartic Acid",
	gaa: "Glutamic Acid",
	gag: "Glutamic Acid",
	ggu: "Glycine",
	ggc: "Glycine",
	gga: "Glycine",
	ggg: "Glycine"
};
function translate (mrna) {
	var MRNA = mrna.toUpperCase();
	var codons  = MRNA.split(" ");
	var proteins;
	for (var i = 0; i < codons) {
		if(!acids[bases[i]]) {
			protien += "ERROR";
		}
		else {
			protiens += acids[bases[i]];
		}
	}
	return protiens;
}
