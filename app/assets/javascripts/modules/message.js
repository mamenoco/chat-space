$(function(){

  function buildHTML(message){
    if (message.image) {
      let html = `<div class="MessageBox" data-message-id=${message.id}>
                    <div class="MessageBox__messageInfo">
                      <div class="MessageBox__messageInfo__userName">
                        ${message.user_name}
                      </div>
                      <div class="MessageBox__messageInfo__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="MessageBox__message">
                      <p class="Messagebox__content">
                        ${message.content}
                      </p>
                      <img class="Messagebox__image" src="${message.image}">
                    </div>
                  </div>`
                  return html;
    } else {
      let html = `<div class="MessageBox" data-message-id=${message.id}>
                    <div class="MessageBox__messageInfo">
                      <div class="MessageBox__messageInfo__userName">
                        ${message.user_name}
                      </div>
                      <div class="MessageBox__messageInfo__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="MessageBox__message">
                      <p class="Messagebox__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
                  return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageList').append(html);
      $('.MessageList').animate({ scrollTop: $('.MessageList')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});