@extends('udemy.layouts.app')

@section('content')
<h1>Contact Page</h1>
  @if(count($peoples))
    <ul>
    @foreach($peoples as $people)
      <li>{{$people}}</li>
    @endforeach
    </ul>
  @endif
@endsection

@section('footer')
<script>
  alert("Hello visitor of Contact Page!");
</script>
@endsection