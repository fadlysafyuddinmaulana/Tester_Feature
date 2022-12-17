function solver_indikator() {
	var sof1 = parseInt(document.getElementById("sof1").value);

	var sof2 = parseInt(document.getElementById("sof2").value);

	var sof3 = parseInt(document.getElementById("sof3").value);

	var sof4 = parseInt(document.getElementById("sof4").value);

	var sof5 = parseInt(document.getElementById("sof5").value);

	var hasil_sof = document.getElementById("hasil_sof");

	eksekusi_sof = sof1 + sof2 + sof3 + sof4 + sof5;

	if (eksekusi_sof >= 6) {
		text = "Lulus";
		hasil_sof.value = text;
	} else {
		text = "Tidak Lulus";
		hasil_sof.value = text;
	}
}
