// https://github.com/jquery/jquery/blob/master/src/manipulation.js#L89

    function cloneCopyEvent( src, dest ) {
      var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

      if ( dest.nodeType !== 1 ) {
        return;
      }

      // 1. Copy private data: events, handlers, etc.
      if ( data_priv.hasData( src ) ) {
        pdataOld = data_priv.access( src );
        pdataCur = data_priv.set( dest, pdataOld );
        events = pdataOld.events;

        if ( events ) {
          delete pdataCur.handle;
          pdataCur.events = {};

          for ( type in events ) {
            for ( i = 0, l = events[ type ].length; i < l; i++ ) {
              jQuery.event.add( dest, type, events[ type ][ i ] );
            }
          }
        }
      }

      // 2. Copy user data
      if ( data_user.hasData( src ) ) {
        udataOld = data_user.access( src );
        udataCur = jQuery.extend( {}, udataOld );

        data_user.set( dest, udataCur );
      }
    }
