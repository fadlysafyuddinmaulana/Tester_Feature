function eksekusi_nilai_1() {
	var s1 = parseInt(document.getElementById("s1").value);

	var s2 = parseInt(document.getElementById("s2").value);

	var eksekusi_hasil = document.getElementById("eksekusi_hasil");

	eksekusi1 = (s1 * 50) / 100;
	eksekusi2 = (s2 * 50) / 100;
	eksekusi3 = eksekusi1 + eksekusi2;
	eksekusi_hasil.value = eksekusi3;
}

function eksekusi_nilai_2() {
	var spod1 = parseInt(document.getElementById("spod1").value);
	var spod2 = parseInt(document.getElementById("spod2").value);
	var spod3 = parseInt(document.getElementById("spod3").value);
	//   sprl
	var sprl1 = parseInt(document.getElementById("sprl1").value);
	var sprl2 = parseInt(document.getElementById("sprl2").value);
	var sprl3 = parseInt(document.getElementById("sprl3").value);
	//   sptl
	var sptl1 = parseInt(document.getElementById("sptl1").value);
	var sptl2 = parseInt(document.getElementById("sptl2").value);
	var sptl3 = parseInt(document.getElementById("sptl3").value);
	//   sppm
	var sppm1 = parseInt(document.getElementById("sppm1").value);
	var sppm2 = parseInt(document.getElementById("sppm2").value);
	var sppm3 = parseInt(document.getElementById("sppm3").value);
	//   sppd
	var sppd1 = parseInt(document.getElementById("sppd1").value);
	var sppd2 = parseInt(document.getElementById("sppd2").value);
	var sppd3 = parseInt(document.getElementById("sppd3").value);
	//   spps
	var spps1 = parseInt(document.getElementById("spps1").value);
	var spps2 = parseInt(document.getElementById("spps2").value);
	var spps3 = parseInt(document.getElementById("spps3").value);

	var eksekusi_hasil_final_1 = document.getElementById(
		"eksekusi_hasil_final_1"
	);
	var eksekusi_hasil_final_2 = document.getElementById(
		"eksekusi_hasil_final_2"
	);

	eksekusi_sp1 = spod1 + spod2 + spod3;
	eksekusi_spb1 = eksekusi_sp1 / 3;
	eksekusi_spk1 = eksekusi_spb1 * 15;
	eksekusi_spf1 = eksekusi_spk1 / 100;

	eksekusi_sp2 = sprl1 + sprl2 + sprl3;
	eksekusi_spb2 = eksekusi_sp2 / 3;
	eksekusi_spk2 = eksekusi_spb2 * 20;
	eksekusi_spf2 = eksekusi_spk2 / 100;

	eksekusi_sp3 = sptl1 + sptl2 + sptl3;
	eksekusi_spb3 = eksekusi_sp3 / 3;
	eksekusi_spk3 = eksekusi_spb3 * 20;
	eksekusi_spf3 = eksekusi_spk3 / 100;

	eksekusi_sp4 = sppm1 + sppm2 + sppm3;
	eksekusi_spb4 = eksekusi_sp4 / 3;
	eksekusi_spk4 = eksekusi_spb4 * 20;
	eksekusi_spf4 = eksekusi_spk4 / 100;

	eksekusi_sp5 = sppd1 + sppd2 + sppd3;
	eksekusi_spb5 = eksekusi_sp5 / 3;
	eksekusi_spk5 = eksekusi_spb5 * 15;
	eksekusi_spf5 = eksekusi_spk5 / 100;

	eksekusi_sp6 = spps1 + spps2 + spps3;
	eksekusi_spb6 = eksekusi_sp6 / 3;
	eksekusi_spk6 = eksekusi_spb6 * 10;
	eksekusi_spf6 = eksekusi_spk6 / 100;

	eksekusi_bsf = Math.round(
		eksekusi_spf1 +
			eksekusi_spf2 +
			eksekusi_spf3 +
			eksekusi_spf4 +
			eksekusi_spf5 +
			eksekusi_spf6
	);

	// eksekusi_bsf =
	// 	eksekusi_spf1 +
	// 	eksekusi_spf2 +
	// 	eksekusi_spf3 +
	// 	eksekusi_spf4 +
	// 	eksekusi_spf5 +
	// 	eksekusi_spf6;

	eksekusi_hasil_final_2.value = eksekusi_bsf;

	if (eksekusi_bsf >= 86 && eksekusi_bsf <= 100) {
		hasil1 = "A";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 81 && eksekusi_bsf < 86) {
		hasil1 = "A-";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 76 && eksekusi_bsf < 86) {
		hasil1 = "B+";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 71 && eksekusi_bsf < 76) {
		hasil1 = "B";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 66 && eksekusi_bsf < 71) {
		hasil1 = "B-";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 61 && eksekusi_bsf < 66) {
		hasil1 = "C+";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 56 && eksekusi_bsf < 61) {
		hasil1 = "C";
		eksekusi_hasil_final_1.value = hasil1;
	} else {
		hasil1 = "D";
		eksekusi_hasil_final_1.value = hasil1;
	}
}

function Test_Function() {
	var s1 = parseInt(document.getElementById("s1").value);

	var s2 = parseInt(document.getElementById("s2").value);

	var spod1 = parseInt(document.getElementById("spod1").value);
	var spod2 = parseInt(document.getElementById("spod2").value);
	var spod3 = parseInt(document.getElementById("spod3").value);
	//   sprl
	var sprl1 = parseInt(document.getElementById("sprl1").value);
	var sprl2 = parseInt(document.getElementById("sprl2").value);
	var sprl3 = parseInt(document.getElementById("sprl3").value);
	//   sptl
	var sptl1 = parseInt(document.getElementById("sptl1").value);
	var sptl2 = parseInt(document.getElementById("sptl2").value);
	var sptl3 = parseInt(document.getElementById("sptl3").value);
	//   sppm
	var sppm1 = parseInt(document.getElementById("sppm1").value);
	var sppm2 = parseInt(document.getElementById("sppm2").value);
	var sppm3 = parseInt(document.getElementById("sppm3").value);
	//   sppd
	var sppd1 = parseInt(document.getElementById("sppd1").value);
	var sppd2 = parseInt(document.getElementById("sppd2").value);
	var sppd3 = parseInt(document.getElementById("sppd3").value);
	//   spps
	var spps1 = parseInt(document.getElementById("spps1").value);
	var spps2 = parseInt(document.getElementById("spps2").value);
	var spps3 = parseInt(document.getElementById("spps3").value);

	var eksekusi_hasil_final_1 = document.getElementById(
		"eksekusi_hasil_final_1"
	);
	var eksekusi_hasil_final_2 = document.getElementById(
		"eksekusi_hasil_final_2"
	);

	eksekusi1 = (s1 * 50) / 100;
	eksekusi2 = (s2 * 50) / 100;
	eksekusi3 = eksekusi1 + eksekusi2;

	eksekusi_sp1 = spod1 + spod2 + spod3;
	eksekusi_spb1 = eksekusi_sp1 / 3;
	eksekusi_spk1 = eksekusi_spb1 * 15;
	eksekusi_spf1 = eksekusi_spk1 / 100;

	eksekusi_sp2 = sprl1 + sprl2 + sprl3;
	eksekusi_spb2 = eksekusi_sp2 / 3;
	eksekusi_spk2 = eksekusi_spb2 * 20;
	eksekusi_spf2 = eksekusi_spk2 / 100;

	eksekusi_sp3 = sptl1 + sptl2 + sptl3;
	eksekusi_spb3 = eksekusi_sp3 / 3;
	eksekusi_spk3 = eksekusi_spb3 * 20;
	eksekusi_spf3 = eksekusi_spk3 / 100;

	eksekusi_sp4 = sppm1 + sppm2 + sppm3;
	eksekusi_spb4 = eksekusi_sp4 / 3;
	eksekusi_spk4 = eksekusi_spb4 * 20;
	eksekusi_spf4 = eksekusi_spk4 / 100;

	eksekusi_sp5 = sppd1 + sppd2 + sppd3;
	eksekusi_spb5 = eksekusi_sp5 / 3;
	eksekusi_spk5 = eksekusi_spb5 * 15;
	eksekusi_spf5 = eksekusi_spk5 / 100;

	eksekusi_sp6 = spps1 + spps2 + spps3;
	eksekusi_spb6 = eksekusi_sp6 / 3;
	eksekusi_spk6 = eksekusi_spb6 * 10;
	eksekusi_spf6 = eksekusi_spk6 / 100;

	eksekusi_bsf = Math.round(
		eksekusi_spf1 +
			eksekusi_spf2 +
			eksekusi_spf3 +
			eksekusi_spf4 +
			eksekusi_spf5 +
			eksekusi_spf6
	);

	// eksekusi_bsf =
	// 	eksekusi_spf1 +
	// 	eksekusi_spf2 +
	// 	eksekusi_spf3 +
	// 	eksekusi_spf4 +
	// 	eksekusi_spf5 +
	// 	eksekusi_spf6;

	eksekusi_hasil_final_2.value = eksekusi3;

	if (eksekusi_bsf >= 86 && eksekusi_bsf <= 100) {
		hasil1 = "A";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 81 && eksekusi_bsf < 86) {
		hasil1 = "A-";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 76 && eksekusi_bsf < 86) {
		hasil1 = "B+";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 71 && eksekusi_bsf < 76) {
		hasil1 = "B";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 66 && eksekusi_bsf < 71) {
		hasil1 = "B-";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 61 && eksekusi_bsf < 66) {
		hasil1 = "C+";
		eksekusi_hasil_final_1.value = hasil1;
	} else if (eksekusi_bsf >= 56 && eksekusi_bsf < 61) {
		hasil1 = "C";
		eksekusi_hasil_final_1.value = hasil1;
	} else {
		hasil1 = "D";
		eksekusi_hasil_final_1.value = hasil1;
	}
}
