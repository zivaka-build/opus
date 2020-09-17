$(function () {


    $(".nav-link").each(function(){
      if ($(this).prop('href') == window.location.href.split("#")[0])
      {
        $(this).addClass('text-link');
      }
      
    });

    $("#nav-intiative").each(function(){
      a=window.location.href.split("/");
      n=a[a.length - 1];
      if( "aashakiran" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "pragati" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "roshni" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "metr" == n )
      {
        $(this).addClass('text-link');
      }
    });

    $("#nav-ms").each(function(){
      a=window.location.href.split("/");
      n=a[a.length - 1];
      if( "aashakiranms" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "pragatims" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "roshnims" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "metrms" == n )
      {
        $(this).addClass('text-link');
      }
    });

    $("#nav-cp").each(function(){
      a=window.location.href.split("/");
      n=a[a.length - 1];
      if( "aashakirancp" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "pragaticp" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "roshnicp" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "metrcp" == n )
      {
        $(this).addClass('text-link');
      }
    });

    $("#navbarDropdownMenuLink").each(function(){
      a=window.location.href.split("/");
      n=a[a.length - 1];
      if( "media" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "contact" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "testimonials" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "vision" == n )
      {
        $(this).addClass('text-link');
      }
      else if( "ourbenefactors" == n )
      {
        $(this).addClass('text-link');
      }
      
    });
})

