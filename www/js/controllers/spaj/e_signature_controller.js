// This controller use e-signature libs, read more https://github.com/szimek/signature_pad

'use strict'

function eSignatureCtrl ($scope, $rootScope) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

  $scope.data = {
    additional_notes: '',
    agent_declaration: {
      name: 'Calvin Widjaya',
      unit: 'GA Power',
      code: '12334353',
      contact_number: '6212345677'
    },
    customer_declaration: {
      name: 'Calvin Widjaya',
      policy_refeence: '12334353',
      contact_number: '6212345677'
    }

  }
  function signatureHandler (idCanvas) {
    var canvas = document.getElementById(idCanvas)
    var signaturePad = new SignaturePad(canvas)
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio = Math.max(window.devicePixelRatio || 1, 1)
    canvas.width = canvas.offsetWidth * ratio
    canvas.height = canvas.offsetHeight * ratio
    canvas.getContext('2d').scale(ratio, ratio)
    return signaturePad
  }

  var agentSignature = signatureHandler('agent-signature-canvas')
  var policyholderSignature = signatureHandler('policyholder-signature-canvas')
  var mainlifeSignature = signatureHandler('mainlife-signature-canvas')
  var parentSignature = signatureHandler('parent-signature-canvas')

  /* TODO: Clear signature
  agentSignature.clear()
  Save signature to base64
  agentSignature.toDataURL(); // save image as PNG
  agentSignature.toDataURL("image/jpeg"); // save image as JPEG
  agentSignature.toDataURL("image/svg+xml"); // save image as SVG

  setTimeout(function () {
      console.log(agentSignature.toDataURL())
      console.log(policyholderSignature.toDataURL())
      console.log(mainlifeSignature.toDataURL())
      console.log(parentSignature.toDataURL())
  }, 10000)
  */
}
