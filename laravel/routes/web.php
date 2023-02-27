<?php


use Illuminate\Support\Facades\Route;

Route::get('/', 'App\Http\Controllers\ScraperController@index')->name('scraper');
Route::post('/scrape', 'App\Http\Controllers\ScraperController@scrape')->name('scrape');
Route::post('/result', 'App\Http\Controllers\ScraperController@scrape')->name('result');

