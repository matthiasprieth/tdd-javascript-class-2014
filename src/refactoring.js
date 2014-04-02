// https://github.com/jquery/jquery/blob/master/src/manipulation.js#L89

function cloneCopyEvent(src, dest) {
  if (dest.nodeType !== 1) {
    return;
  }
  if (data_priv.hasData(src)) {
    _copyPrivateData(src, dest);
  }
  if (data_user.hasData(src)) {
    _copyUserData(src, dest);
  }
}

function _removeEvent(dest, pdataOld) {
  var pdataCur = data_priv.set(dest, pdataOld);
  delete pdataCur.handle;
  pdataCur.events = {};
}

function _addEvent(dest, type, event) {
  var l = event.length;
  for (var i = 0; i < l; i++) {
    jQuery.event.add(dest, type, event[ i ]);
  }
}

function _addEvents(events, dest) {
  for (var type in events) {
    var event = events[ type ];
    _addEvent(dest, type, event);
  }
}

function _copyPrivateData(src, dest) {
  var pdataOld = data_priv.access(src);
  var events = pdataOld.events;

  if (events) {
    _removeEvent(dest, pdataOld);
    _addEvents(events, dest);
  }
}

function _copyUserData(src, dest) {
  var udataOld = data_user.access(src);
  var udataCur = jQuery.extend({}, udataOld);

  data_user.set(dest, udataCur);
}
