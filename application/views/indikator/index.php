<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem ipsum dolor sit.</title>
</head>

<style>
    .tb-style,
    th,
    td {
        padding: 15px;
    }
</style>

<body>
    <table class="tb-style">
        <tr>
            <th>Indikator</th>
            <th>Standar</th>
        </tr>
        <tr>
            <td>1.Presentase Mahasiswa yang lulus tepat waktu</td>
            <td>80%</td>
            <td>
                <select name="sof1" id="sof1">
                    <option value="2">Lulus</option>
                    <option value="1">Tidak Lulus</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>2.Rata-rata lama studi</td>
            <td>3,5-4,5</td>
            <td>
                <select name="sof2" id="sof2">
                    <option value="2">Lulus</option>
                    <option value="1">Tidak Lulus</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>3.Terdapat pedomanan tugas Akhir</td>
            <td>ada</td>
            <td>
                <select name="sof3" id="sof3">
                    <option value="2">Lulus</option>
                    <option value="1">Tidak Lulus</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>4.Tugas terstruktur minimal 20%</td>
            <td>100%</td>
            <td>
                <select name="sof4" id="sof4">
                    <option value="2">Lulus</option>
                    <option value="1">Tidak Lulus</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>5.Terdapat review soal</td>
            <td>100%</td>
            <td>
                <select name="sof5" id="sof5">
                    <option value="2">Lulus</option>
                    <option value="1">Tidak Lulus</option>
                </select>
            </td>
            <td>
                <input type="submit" value="submit" onclick="solver_indikator()">
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;
            </td>
            <td>
                &nbsp;
            </td>
            <td>
                <input style="border: none; border-bottom: 2px solid white;" type="text" name="hasil_sof" id="hasil_sof" readonly>
            </td>
        </tr>

    </table>
</body>
<script src="<?= base_url() ?>assets/Process-Indikator.js"></script>

</html>