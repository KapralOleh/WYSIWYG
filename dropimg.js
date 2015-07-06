//перетягування картинки з робочого столу
$('#window').on('drop', function (event) {
        console.log(event.type);
        event.preventDefault();

        if (event.originalEvent.dataTransfer.files.length > 0) {
            var imageFile = event.originalEvent.dataTransfer.files[0];

            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("window").focus();

                var sel = window.getSelection();
                var range = sel.getRangeAt(0);
                var crange = document.caretRangeFromPoint(event.originalEvent.clientX, event.originalEvent.clientY);

                var image = new Image();
                image.src = e.target.result;

                crange.insertNode(image);

                crange.setStartBefore(image);
                crange.setEndAfter(image);
                sel.removeAllRanges();
                sel.addRange(crange);
            }
            reader.readAsDataURL(imageFile);
        } else {
            var sel = window.getSelection();
            var oldRange = sel.getRangeAt(0);
            var newRange = document.caretRangeFromPoint(event.originalEvent.clientX, event.originalEvent.clientY);

            var frag = oldRange.cloneContents();
            oldRange.deleteContents();

            var node = frag.firstChild;

            newRange.insertNode(node);

            newRange.setStartBefore(node);
            newRange.setEndAfter(node);

            sel.removeAllRanges();
            sel.addRange(newRange);
        }
    });




