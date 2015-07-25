require './helpers'

describe "Todolist Item Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = []
    { @Component } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @id = "1"
    @type = 'foo'
    @setLevel = sinon.spy()

  describe "general", ->
    When  -> @subject  = renderElement @Component, { @id, @type }
    Then  -> @classes = @subject.className.split ' '
    And   -> @subject.textContent == 'Open'
    And   -> @classes.includes "card_nav"


  describe "click select", ->
    Given  -> 
      @subject  = renderElement @Component, { @id, @type, @setLevel }
      @button = @subject.querySelector('.card_nav button')
    When   -> TestUtils.Simulate.click(@button)
    Then   -> expect(@setLevel).to.be.calledWith({@id, @type})
