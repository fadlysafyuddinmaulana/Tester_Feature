<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Dashboard extends CI_Controller
{
    public function nilai_skripsi()
    {
        $this->load->view('nilai-skripsi/index');
    }
    public function indikator()
    {
        $this->load->view('indikator/index');
    }
}
