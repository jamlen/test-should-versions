var versions = [
    '4.0.4',
    '4.1.0',
    '4.2.0',
    '4.2.1',
    '4.3.0',
    '4.3.1',
    '4.4.0',
    '4.4.1',
    '4.4.2',
    '4.4.3',
    '4.4.4'
];
var actual = [{
    CustomerRef: '123456',
}];
var expected = [{
    CustomerRef: 123456,
}];

versions.forEach(function(v) {
    describe('should ' + v, function() {
        it('should pass', function() {
            require('./should-' + v)(actual).eql(expected);
        });
    });
});
