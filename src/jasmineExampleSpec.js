require('jasmine-matchers');
xdescribe('all', function() {


  describe('Test suite', function() {
  });

  describe('Test suite', function() {
    describe('Nested test suite', function() {
    });
  });

  describe('Test suite', function() {
    it('test case 1', function() {
    });
    it('test case 2', function() {
    });
  });

  it('should get the angle by scroll position', function() {
    var scrollOffset = 100;
    var expectedAngle = 25;
    expect(getAngleByScrollOffset(scrollOffset)).toBe(expectedAngle);
  });

  it('should throw error for duplicate username', function() {
    function addNewUserFunc() {
      addNewUser('duplicate username');
    }
    expect(addNewUserFunc).toThrow();
  });

  it('should not throw for new valid username', function() {
    function addNewUserFunc() {
      addNewUser('valid username');
    }
    expect(addNewUserFunc).not.toThrow();
  });

  it('should have foo', function() {
    var a = {foo: "foo"};

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });

  it('should have foo', function() {
    var a = {foo: "foo"};
    expect(a.foo).toBeDefined();
  });

  it('should not have bar', function() {
    var a = {foo: "foo"};
    expect(a.bar).not.toBeDefined();
  });

  it('should have bar', function() {
    var a = {foo: "foo"};
    expect(a).toHaveProperties('bar');
  });

  describe('tests with setup', function() {

    beforeEach(function() {
      this.obj = {foo: true};
    });

    it('should have foo', function() {
      expect(this.obj).toHaveProperties('foo');
    });
  });
  
  describe('nested tests with setup', function() {

    beforeEach(function() {
      this.obj = {foo: true};
    });

    describe('check the object properties', function() {

      beforeEach(function() {
        this.obj = {bar: false};
      });

      it('should have bar=false', function() {
        expect(this.obj).toHavePropertiesWithValues({bar: false});
      });
    });
  });

  it('matcher examples', function() {

    expect('lots of money').toMatch(/lots/);

    expect('lots of money').toContain('lots');

    expect('lots of money').not.toContain('dollars');

    expect('lots of money').toContain('lots');

    expect(null).toBeNull();

    expect(this.noWay).toBeUndefined();

    expect(1).toBeDefined();

    expect(3).toBeLessThan(Math.PI);

    expect(Math.PI).toBeCloseTo(3.14, 2);

    expect(function() { throw Error; }).toThrow();



  });

  it('bad matchers', function() {

    expect('0').toBeTruthy();

    expect([]).toBeFalsy();

  });

  it('use instead', function() {

    expect('0').toBe('0');

    expect([]).toEqual([]);

  });


  


  describe('bad test cases', function() {
    it('should convert flash to html5', function() {
      expect(convertFlash('flashFile')).toBe('html5');
    });
    it('should sign in a user over github', function() {
      expect(signInThroughGithub(username)).toBe(true);
    });
    it('should send data as XHR and get positive result', function() {
      expect(sendDataOverXhr(data)).toBe('positiveResponse');
    });
  });


});
