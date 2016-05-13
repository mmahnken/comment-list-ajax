console.log('IM HERE FEED ME');

function saveComment(evt) {
    // get the value out of the textarea
    var commentText = $('#new-comment').val();
    var postParams = {comment: commentText};
    
    // send an ajax request with the value of the textarea
    $.post("/add-comment.json", postParams, showCommentToUser);

}


function makeCommentHtml(commentText){
    var htmlToInsert = "<div class='comment'><h4>Meggie says:</h4><p class='comment'>"+commentText+"</p></div>";
    return htmlToInsert
}

function showCommentToUser(data) {
    
    // when were back from the server, display comment at bottom of list
    // with requisite styling and layout, etc.
    var comment = data.comment;
    var html = makeCommentHtml(comment);

    // find the end of the comments
    // insert correct html there
    $('#comment-list').append(html);
    
    // empty comment box out
    $('#new-comment').val('');
}


$('#add-comment').on('click', saveComment);