import {HttpErrorResponse} from '@angular/common/http';
import {OrderFiles} from '../../models/orderFiles';
import {OrderService} from '../../pages/order/order.service';
import {NotificationService} from '../../services/notification.service';
import {UploadFileInfo} from '../../models/file';

export class FileUploader {

    isUploading = false;

    convertToUploadFile(filesToUpload, callback) {
        this.parseFiles(filesToUpload,
            (parsedFiles, index) => {
            console.log('files to upload: ', index, filesToUpload);
                let orderFiles = new OrderFiles();
                orderFiles.text = 'subor';
                orderFiles.files = parsedFiles;

                this.isUploading = true;
                callback(orderFiles)
            }
        )
    }

    parseFiles(filesToUpload, onFinish) {

        let parsedFiles = 0;
        let totalFiles = filesToUpload.files.length;

        let arrayOfFiles = new Array<UploadFileInfo>();

        for (let file of filesToUpload.files) {
            let customFile = new UploadFileInfo();
            customFile.filename = file.name;

            this.getBase64fromFile(file,
                data => {
                    parsedFiles++;
                    let bannedStrings = ["vnd.openxmlformats-officedocument.wordprocessingml.document", "msword"];
                    for (let bannedString of bannedStrings) {
                        if (data.indexOf(bannedString) > -1) {
                            console.log('bannedString is there');
                            data = data.replace(bannedString, 'docx');
                        }
                    }

                    customFile.base64File = data;
                    arrayOfFiles.push(customFile);
                    if (parsedFiles == totalFiles) {
                        onFinish(arrayOfFiles);
                    }
                }
            )

        }
    }

    getBase64fromFile(file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            callback(reader.result);
        };

        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}