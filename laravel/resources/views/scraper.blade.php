<!DOCTYPE html>
<html>
<head>
    <title>Web Scraper</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body style="width: 80%; margin: 0 auto;">
<h1>Web Scraper</h1>
@if(session('success'))
    <div>{{ session('success') }}</div>
@endif
<form method="POST" action="{{ route('scrape') }}">
    @csrf
    <label for="url">Enter page URL:</label>
    <input type="text" name="url" id="url" required>
    <button type="submit">Scrape</button>
</form>
<h2>Page Info </h2>
<br>
<h4>URL:</h4><h6><a href="@isset($data)
    {{ $data->getUrl() }}
    @endisset"> @isset($data)
            {{ $data->getUrl() }}
    @endisset</a></h6>
<br>
<h4>Title:</h4><h6>@isset($data)
        {{ $data->getTitle() }}
    @endisset</h6>
<br>
<h4>Description:</h4><h6>@isset($data)
        {{ $data->getDescription() }}
    @endisset</h6>
<br>
<h4>H1:</h4><h6>@isset($data)
        {{ $data->getHOne() }}
    @endisset</h6>
<br>
<h4>Text:</h4><h6>@isset($data)
        {{ $data->getText() }}
    @endisset</h6>
<br>
<h4>Words:</h4><h6>@isset($data)
        {{ $data->getWordsCount() }}
    @endisset</h6>
<br>
<table class="table">
    <thead>
    <tr>
        <th scope="col">Word</th>
        <th scope="col">Count</th>
        <th scope="col">Percent</th>
    </tr>
    </thead>
    <tbody>
    @isset($data)
        @foreach($data->getWords() as $word)
        <tr>
            <td>{{ $word[0] }}</td>
            <td>{{ $word[1] }}</td>
            <td>{{ round((($word[1]/$data->getWordsCount())*100),2) }}</td>
        </tr>
        @endforeach
    @endisset
    </tbody>
</table>

<h2>Scraped Pages</h2>
<table class="table">
    <thead>
    <tr>
        <th scope="col">URL</th>
        <th scope="col">Title</th>
        <th scope="col">Word Count</th>
        <th scope="col">Date</th>
    </tr>
    </thead>
    <tbody>
@foreach($dataPages as $page)
    <tr>
        <td>{{ $page->url }}</td>
        <td>{{ $page->title }}</td>
        <td>{{ $page->wordCount }}</td>
        <td>{{ $page->created_at }}</td>
    </tr>
@endforeach
</tbody>
</table>
</body>
</html>
