versions=('4.1.0' '4.2.0' '4.2.1' '4.3.0' '4.3.1' '4.4.0' '4.4.1' '4.4.2' '4.4.3')

for v in "${versions[@]}"
do
    (npm install should@$v; mv node_modules/should should-$v)
done