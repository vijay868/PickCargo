﻿$(function () {
    $('#frmVehicle').validate({
        rules: {
            operatorVehicle_VehicleRegistrationNo: {
                required: true
            },
            operatorVehicle_VehicleType: {
                required: true
            },
            operatorVehicle_VehicleCategory: {
                required: true
            },
            operatorVehicle_Model: {
                required: true
            },
            operatorVehicle_Tonnage: {
                required: true
            }
        }
    });
});
var gIndex = -1;
function EditOperatorVehicle(index) {
    debugger
    gIndex = index;
    //OPerator_OperatorVehicle_0__VehicleRegistrationNo
    var baseID = 'operatorVehicle_' + index + '__';
    $('#operatorVehicle_VehicleRegistrationNo').val($('#' + baseID + 'VehicleRegistrationNo').val());
    $('#operatorVehicle_VehicleType option').filter(function () {
        return this.text == $('#' + baseID + 'VehicleType').val();
    }).attr('selected', true);

    $('#operatorVehicle_Model option').filter(function () {
        return this.text == $('#' + baseID + 'Model').val();
    }).attr('selected', true);
    
    
    $('#operatorVehicle_Tonnage').val($('#' + baseID + 'Tonnage').val());
    $('#VehicleModal').modal('show');

}
function DeleteOperatorVehicle(index) {
    var id = '#vehicle_OperatorVehicleList_' + index + '__IsActive';
    $(id).val('False');
    $('#trRow_' + index).css({
        color: 'red',
        'text-decoration': 'line-through',
        'font-style': 'italic'
    });
}
function btnSaveVehicle() {
    debugger;
    if (!$('#frmVehicle').valid())
        return;

    if (gIndex != -1) {
        var baseID = 'vehicle_OperatorVehicleList_' + gIndex + '__';
        $('#' + baseID + 'operatorVehicle_VehicleRegistrationNo').val($('#operatorVehicle_VehicleRegistrationNo').val());
        $('#' + 'operatorVehicle_VehicleRegistrationNo_span_' + gIndex).text($('#operatorVehicle_VehicleRegistrationNo').val());

        $('#' + baseID + 'operatorVehicle_VehicleType').val($('#operatorVehicle_VehicleType').val());
        $('#' + 'operatorVehicle_VehicleType_span_' + gIndex).text($('#operatorVehicle_VehicleType option:selected').text());

        $('#' + baseID + 'operatorVehicle_VehicleCategory').val($('#operatorVehicle_VehicleCategory').val());
        $('#' + 'operatorVehicle_VehicleCategory_span_' + gIndex).text($('#operatorVehicle_VehicleCategory').text());

        $('#' + baseID + 'operatorVehicle_Model').val($('#operatorVehicle_Model').val());
        $('#' + 'operatorVehicle_Model_span_' + gIndex).text($('#operatorVehicle_Model').val());

        $('#' + baseID + 'operatorVehicle_Tonnage').val($('#operatorVehicle_Tonnage').val());
        $('#' + 'operatorVehicle_Tonnage_span_' + gIndex).text($('#operatorVehicle_Tonnage').val());
    } else {
        var index = $('.trRowCss').length;
        var html = '<tr id="trRow_' + index + '">' +
                        '<td>' +
                            '<span id="operatorVehicle_VehicleRegistrationNo_span_' + index + '">' + $('#operatorVehicle_VehicleRegistrationNo').val() + '</span>' +
                            '<input class="vehicleNoCss" id="vehicle_OperatorVehicleList_' + index + '__operatorVehicle_VehicleRegistrationNo" name="OPerator.OperatorVehicle[' + index + '].VehicleRegistrationNo" type="hidden" value="' + $('#operatorVehicle_VehicleRegistrationNo').val() + '">' +
                        '</td>' +
                        '<td>' +
                            '<span id="operatorVehicle_VehicleType_span_' + index + '">' + $('#operatorVehicle_VehicleType').val() + '</span>' +
                            '<input id="vehicle_OperatorVehicleList_' + index + '__operatorVehicle_VehicleType" name="OPerator.OperatorVehicle[' + index + '].VehicleType" type="hidden" value="' + $('#operatorVehicle_VehicleType').val() + '">' +
                        '</td>' +
                        '<td>' +
                            '<span id="operatorVehicle_VehicleCategory_span_' + index + '">' + $('#operatorVehicle_VehicleCategory').val() + '</span>' +
                            '<input id="vehicle_OperatorVehicleList_' + index + '__operatorVehicle_VehicleCategory" name="OPerator.OperatorVehicle[' + index + '].VehicleCategory" type="hidden" value="' + $('#operatorVehicle_VehicleCategory').val() + '">' +
                        '</td>' +
                         '<td>' +
                            '<span id="operatorVehicle_Model_span_' + index + '">' + $('#operatorVehicle_Model').val() + '</span>' +
                            '<input id="vehicle_OperatorVehicleList_' + index + '__operatorVehicle_Model" name="OPerator.OperatorVehicle[' + index + '].Model" type="hidden" value="' + $('#operatorVehicle_Model').val() + '">' +
                        '</td>' +
                         '<td>' +
                            '<span id="operatorVehicle_Tonnage_span_' + index + '">' + $('#operatorVehicle_Tonnage').val() + '</span>' +
                            '<input id="vehicle_OperatorVehicleList_' + index + '__operatorVehicle_Tonnage" name="OPerator.OperatorVehicle[' + index + '].Tonnage" type="hidden" value="' + $('#operatorVehicle_Tonnage').val() + '">' +
                        '</td>' +
                        '<td>' +
                         '<a class="hand" onclick="EditOperatorVehicle(\'' + index + '\')">Edit</a>&nbsp;|&nbsp;' +
                            '<a class="hand" onclick="DeleteOperatorVehicle(\'' + index + '\')">Delete</a>' +
                        '</td>'
        '</tr>';
        $('#trBodyVehicle').append(html);
        $('#operatorVehicle_VehicleRegistrationNo').val('');
        $('#operatorVehicle_VehicleType').val('');
        $('#operatorVehicle_VehicleCategory').val('');
        $('#operatorVehicle_Model').val('');
        $('#operatorVehicle_Tonnage').val('');
    }


    $('#VehicleModal').modal('hide');
    gIndex = -1;
}
function AddVehicle(index) {
    gIndex = -1;
    $('#operatorVehicle_VehicleRegistrationNo, #operatorVehicle_VehicleType,#operatorVehicle_VehicleCategory, #operatorVehicle_Model, #operatorVehicle_Tonnage').val('');
    $('#VehicleModal').modal('show');
}