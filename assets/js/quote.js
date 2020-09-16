
$("#Apart").hide();
$("#Floor").hide();
$("#Basement").hide();
$("#Business").hide();
$("#Parking").hide();
$("#Cage").hide();
$("#Tenant").hide();
$("#Occupants").hide();
$("#Hours").hide();
$("#Price").hide();
$("#cage_estimate").hide();
$("#Installation").hide();
$("#Total").hide();
$("#Product").hide();

$("#building").click(function(){
    var build = $("#building option:selected").text();
      if (build==="Residential"){
        console.log(build);       
        $("#Apart").show();
        $("#Floor").show();
        $("#Basement").show();
        $("#Business").hide();
        $("#Parking").hide();
        $("#Cage").hide();
        $("#Tenant").hide();
        $("#Occupants").hide();
        $("#Hours").hide();
        $("#Product").show();
        $("#Price").show();
        $("#cage_estimate").show();
        $("#Installation").show();
        $("#Total").show();
        $("#Product").show();
      };

      if (build==="--- Select ---"){
        console.log("build1");       
        $("#Apart").hide();
        $("#Floor").hide();
        $("#Basement").hide();
        $("#Business").hide();
        $("#Parking").hide();
        $("#Cage").hide();
        $("#Tenant").hide();
        $("#Occupants").hide();
        $("#Hours").hide();
        $("#Price").hide();
        $("#cage_estimate").hide();
        $("#Installation").hide();
        $("#Total").hide();
        $("#Product").hide();
      };

      if (build==="Commercial"){
        $("#Apart").hide();
        $("#Floor").show();
        $("#Basement").show();
        $("#Business").show();
        $("#Parking").show();
        $("#Cage").show();
        $("#Tenant").hide();
        $("#Occupants").hide();
        $("#Hours").hide();
        $("#Price").show();
        $("#cage_estimate").show();
        $("#Installation").show();
        $("#Total").show();
        $("#Product").show();
      };

      if (build==="Corporate"){
        $("#Apart").hide();
        $("#Floor").show();
        $("#Basement").show();
        $("#Business").hide();
        $("#Parking").show();
        $("#Cage").hide();
        $("#Tenant").show();
        $("#Occupants").show();
        $("#Hours").hide();
        $("#Price").show();
        $("#cage_estimate").show();
        $("#Installation").show();
        $("#Total").show();
        $("#Product").show();
      };

      if (build=="Hybrid"){
        $("#Apart").hide();
        $("#Floor").show();
        $("#Basement").show();
        $("#Business").show();
        $("#Parking").show();
        $("#Cage").hide();
        $("#Tenant").hide();
        $("#Occupants").show();
        $("#Hours").show();
        $("#Price").show();
        $("#cage_estimate").show();
        $("#Installation").show();
        $("#Total").show();
        $("#Product").show();
      };

        
});    


var NumberApart = document.getElementById('apart1');
var NumberFloor = document.getElementById('floor1');
var NumberBasement = document.getElementById('base1');
var Business = document.getElementById('busi1');
var Parking = document.getElementById('park1');
var NumberCage = document.getElementById('cage1');
var DiffTenant = document.getElementById('tenant1');
var occupents = document.getElementById('occup1');
var hours = document.getElementById('hours1');
var ProductType = document.getElementById('Product');
var PricePerCage = document.getElementById('pricecage1');
var CageAmount = document.getElementById('cageestimate');
var InstallationFee = document.getElementById('installation1');
var TotalPrice = 0;
var TotalElevator = 0;

function commercial(){
  CageAmount.value = NumberCage.value;
};

function Residential(){
var ApartPerFloor = parseInt(NumberApart.value) / parseInt(NumberFloor.value);
var NumberElevator6 = Math.ceil(ApartPerFloor / 6);
var column = Math.ceil(parseInt(NumberFloor.value) / 20);
 TotalElevator = column * NumberElevator6;
CageAmount.value =TotalElevator;
console.log("TotalElevator : " + TotalElevator);
};

function CorporateHybrid(){
  var Stories = parseInt(NumberFloor.value) + parseInt(NumberBasement.value);
var TotalOccupants = occupents.value * Stories;
var ReccomendedElevator = Math.ceil(TotalOccupants / 1000);
var ColumnRequired = Math.ceil(Stories / 20);
var ElevatorPerColumn = Math.ceil(ReccomendedElevator / ColumnRequired);
 TotalElevator = Math.ceil(ElevatorPerColumn * ColumnRequired);
CageAmount.value = TotalElevator;
};



$("input").on("keyup click", function(){
  var build = $("#building option:selected").text();
    if (build==="Residential"){
      Residential();
      console.log("Residential : "+ Residential);
    };

    if (build==="Commercial"){
      commercial();
    };

    if (build==="Corporate"){
      CorporateHybrid();
    };

    if (build=="Hybrid"){
      CorporateHybrid();
    };

});  

$("#Product").on('click', function(){
  var type = $("input[name='radio'] option:checked").val();
    if($("#standard").prop("checked")){
      TotalPrice = 7565 * parseInt(CageAmount.value);
      var InstallationFee = 7565 * 1.1;
      TotalPrice = InstallationFee * CageAmount.value;
      var PricePerCage = 7565;
      document.getElementById('installation1').value = InstallationFee;
      document.getElementById('pricecage1').value = PricePerCage;
      document.getElementById('totaltotal1').value = TotalPrice;
      console.log("calcul1")
      }

  if($("#premium").prop("checked")){
    TotalPrice = 12345 * parseInt(CageAmount.value);
    var InstallationFee = 12345 * 1.13;
    TotalPrice = InstallationFee * CageAmount.value;
    var PricePerCage = 12345;
    document.getElementById('installation1').value = InstallationFee;
    document.getElementById('pricecage1').value = PricePerCage;
    document.getElementById('totaltotal1').value = TotalPrice;
    }

  if($("#excelium").prop("checked")){
      TotalPrice = 15400 * parseInt(CageAmount.value);
      var InstallationFee = 15400 * 1.16;
      TotalPrice = InstallationFee * CageAmount.value;
      var PricePerCage = 15400;
      document.getElementById('installation1').value = InstallationFee;
      document.getElementById('pricecage1').value = PricePerCage;
      document.getElementById('totaltotal1').value = TotalPrice;
  }
  });