// https://github.com/jquery/jquery/blob/master/src/manipulation.js#L89

function removeAllEvents(dest, pdataOld) {
  var pdataCur = data_priv.set(dest, pdataOld);
  delete pdataCur.handle;
  pdataCur.events = {};
}

function addEvent(dest, type, event) {
  var l = event.length;
  for (var i = 0; i < l; i++) {
    jQuery.event.add(dest, type, event[ i ]);
  }
  return i;
}

function addAllDefinedEvents(events, dest) {
  for (var type in events) {
    var event = events[ type ];
    addEvent(dest, type, event);
  }
}

function copyPrivateData(src, dest) {
  var pdataOld = data_priv.access(src);
  var events = pdataOld.events;

  if (events) {
    removeAllEvents(dest, pdataOld);
    addAllDefinedEvents(events, dest);
  }
}

function copyUserData(src, dest) {
  var udataOld = data_user.access(src);
  var udataCur = jQuery.extend({}, udataOld);

  data_user.set(dest, udataCur);
}

function cloneCopyEvent(src, dest) {
  if (dest.nodeType !== 1) {
    return;
  }
  if (data_priv.hasData(src)) {
    copyPrivateData(src, dest);
  }
  if (data_user.hasData(src)) {
    copyUserData(src, dest);
  }
}
