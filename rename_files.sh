for file in *.jpeg
do
    echo "Old file => " $file
    mv $file `echo $file | sed 's/\image/\_image/'`
done

for file in *.jpeg
do 
    echo "Old file => " $file
    mv $file `echo $file | sed 's/mfp_//'`
done
