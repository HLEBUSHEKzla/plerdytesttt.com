<?php

namespace App\Http\Controllers;

use App\Models\Call;
use App\Models\Lead;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use DOMDocument;
use App\Models\Page;

class ScraperController extends Controller
{
    private $url;
    private $title;
    private $description;
    private $hOne;
    private $text;
    private $wordCount;
    private $wordArr = array();

    public function setUrl($url){
        $this->url = $url;
    }
    public function setTitle($title){
        $this->title = $title;
    }
    public function setDescription($description){
        $this->description = $description;
    }
    public function setHOne($hOne){
        $this->hOne = $hOne;
    }
    public function setText($text){
        $this->text = $text;
    }
    public function setWordsCount($wordCount){
        $this->wordCount = $wordCount;
    }
    public  function setNewWord($item, $value){
        array_push( $this->wordArr, [$item, $value]);
    }

    public function getUrl(){
        return $this->url;
    }
    public function getTitle(){
        return $this->title;
    }
    public function getDescription(){
        return $this->description;
    }
    public function getHOne(){
        return $this->hOne;
    }
    public function getText(){
        return $this->text;
    }
    public function getWordsCount(){
        return $this->wordCount;
    }
    public function getWords(){
        return $this->wordArr;
    }

    public function index()
    {
        return view('scraper', ['dataPages'=>ScraperController::GetAllPages()]);
    }

    public function scrape(Request $request)
    {
        $url = "";
        $title = "";
        $description = "";
        $hOneFull = "";
        $text = "";
        $wordCount = 0;

        $url = $request->input('url');
        $this->setUrl($url);

        $html_content = file_get_contents($url);

        $dom = new DOMDocument();

        libxml_use_internal_errors(true);

        $dom->loadHTML($html_content);

        $this->setDescription($description);

        if($dom->getElementsByTagName('title')[0]->textContent){
            $title = $dom->getElementsByTagName('title')[0]->textContent;
            $text .= $title;
        }

        $this->setTitle($title);

        $metaTags = $dom->getElementsByTagName('meta');
        foreach ($metaTags as $meta) {
            if ($meta->getAttribute('name') == 'description') {
                $description = " " . $meta->getAttribute('content');
            }
        }
        $this->setDescription($description);
        $text .=$description;

        $a= $dom->getElementsByTagName('a');

        $hOne= $dom->getElementsByTagName('h1');
        $hTwo= $dom->getElementsByTagName('h2');
        $hThree= $dom->getElementsByTagName('h3');
        $hFour= $dom->getElementsByTagName('h4');
        $hFive= $dom->getElementsByTagName('h5');
        $hSix= $dom->getElementsByTagName('h6');

        $paragraphs = $dom->getElementsByTagName('p');

        foreach ($a as $aItem) {
            $text .= " " . $aItem->textContent;
        }

        foreach ($hOne as $hItem) {
            $text .= " " . $hItem->textContent;
            $hOneFull .= $hItem->textContent . ", ";
        }

        $this->setHOne($hOneFull);

        foreach ($hTwo as $hItem) {
            $text .= " " .$hItem->textContent;
        }
        foreach ($hThree as $hItem) {
            $text .= " " .$hItem->textContent;
        }
        foreach ($hFour as $hItem) {
            $text .= " " .$hItem->textContent;
        }
        foreach ($hFive as $hItem) {
            $text .= " " .$hItem->textContent;
        }
        foreach ($hSix as $hItem) {
            $text .= " " .$hItem->textContent;
        }

        foreach ($paragraphs as $paragraph) {
            $text .= " " .$paragraph->textContent;
        }

        if($dom->getElementsByTagName('img')){
            $images = $dom->getElementsByTagName('img');
            $imageAlts = [];
            foreach ($images as $image) {
                $alt = $image->getAttribute('alt');
                if (!empty($alt)) {
                    $imageAlts[] = $alt;
                }
            }
            $text .= implode(' ', $imageAlts);
        }

        $text = str_replace("\n", '', $text);
        $text = str_replace("\t", '', $text);
        $text = preg_replace('/\s+/', ' ', $text);

        $words = str_word_count($text, 1, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZАаБбВвГгДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯяЭэЫыЪъЁёўѢѣѪѫІїЇҐґ');
        $wordCount = str_word_count($text);
        $wordCountsArr = array_count_values($words);

        $this->setText($text);
        $this->setWordsCount($wordCount);

        //var_dump($wordCountsArr);

        foreach ($wordCountsArr as $item => $value) {
            $this->setNewWord($item, $value);
           //dd($item);
        }

        ScraperController::AddPage($this);
        return view('scraper', ['data'=>$this, 'dataPages'=>ScraperController::GetAllPages()]);
    }

    public static function AddPage(ScraperController $page){
        $pageItem = new Page();

        $pageItem->url = $page->getUrl();
        $pageItem->title = $page->getTitle();
        $pageItem->wordCount = $page->getWordsCount();

        $pageItem->save();
    }

    public static function GetAllPages(){
        $data=Page::all();
        return $data;
    }
}
