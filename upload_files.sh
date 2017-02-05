for file in *.jpeg
do
    echo "Uploading file => " $file
    node parse-file-upload.js $file
done

