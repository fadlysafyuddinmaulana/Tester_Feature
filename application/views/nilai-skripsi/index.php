<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem ipsum dolor sit.</title>
</head>

<body>
    <table>
        <tr>
            <td><label for="">Ketepatan dan kedisplinan selama pelaksanaan bimbingan skripsi</label>
            </td>
            <td><input type="text" name="s1" id="s1" value="<?= random_string('nozero', 2); ?>"></td>
        </tr>
        <tr>
            <td><label for="">Kemauan dan tingkat kedisplinan dalam menyelesaikan skripsi</label>
            </td>
            <td><input type="text" name="s2" id="s2" value="<?= random_string('nozero', 2); ?>"></td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td><input type="text" name="eksekusi_hasil_final_2" id="eksekusi_hasil_final_2"></td>
        </tr>
        <th>
            &nbsp;
        </th>
        <th>Skor 1</th>
        <th>Skor 2</th>
        <th>Skor 3</th>
        <tr>
            <td><label for="">Orisinalitas dan kebaruan topik penelitian</label>
            </td>
            <td><input type="text" name="spod1" id="spod1" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="spod2" id="spod2" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="spod3" id="spod3" value="<?= random_string('nozero', 2); ?>"></td>
            <!-- <td><input type="submit" onclick="()" value="submit"></td> -->
        </tr>
        <tr>
            <td><label for="">Relevansi logis antara judul,masalah,teori,metode dan hasil penelitian</label>
            </td>
            <td><input type="text" name="sprl1" id="sprl1" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sprl2" id="sprl2" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sprl3" id="sprl3" value="<?= random_string('nozero', 2); ?>"></td>
        </tr>
        <tr>
            <td><label for="">Tata Tulis</label>
            </td>
            <td><input type="text" name="sptl1" id="sptl1" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sptl2" id="sptl2" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sptl3" id="sptl3" value="<?= random_string('nozero', 2); ?>"></td>
        </tr>
        <tr>
            <td><label for="">Penguasaan materi penelitian</label>
            </td>
            <td><input type="text" name="sppm1" id="sppm1" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sppm2" id="sppm2" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sppm3" id="sppm3" value="<?= random_string('nozero', 2); ?>"></td>
        </tr>
        <tr>
            <td><label for="">Presentasi dan argumentasi jawaban</label>
            </td>
            <td><input type="text" name="sppd1" id="sppd1" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sppd2" id="sppd2" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="sppd3" id="sppd3" value="<?= random_string('nozero', 2); ?>"></td>
        </tr>
        <tr>
            <td><label for="">Penampilan saat presentasi</label>
            </td>
            <td><input type="text" name="spps1" id="spps1" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="spps2" id="spps2" value="<?= random_string('nozero', 2); ?>"></td>
            <td><input type="text" name="spps3" id="spps3" value="<?= random_string('nozero', 2); ?>"></td>
            <!-- <td><input type="submit" onclick="eksekusi_nilai()" value="submit"></td> -->
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td><label id="">Hasil</label></td>
            <td>&nbsp;</td>
            <td><input type="text" name="eksekusi_hasil" id="eksekusi_hasil_final_1"></td>
            <td><input type="submit" onclick="Test_Function()" value="submit"></td>
        </tr>
    </table>
</body>
<script src="<?= base_url() ?>assets/Process-Solver.js"></script>

</html>