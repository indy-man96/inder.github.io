
function ValidateName(name) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(name);
  }

  function ValidateFullName(FullName) {
    var re = /^[A-Za-z0-9 ]{3,30}$/;
      return re.test(FullName);
    }
