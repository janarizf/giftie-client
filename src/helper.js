import listsService from "./services/lists.service";
import groupsService from "./services/groups.service";

export async function ImgUpload(selectedFile, callback) {
    return listsService.fileupload(selectedFile)
        .then((res) => {
            return callback(res);
        });
}

export function CheckImgFile(file, callback) {
    let ImagesArray = Object.entries(file.target.files).map((e) => {
        if (e[1].type !== "image/png" && e[1].type !== "image/jpeg") {
            window.alert("File is not supported. You must use .png or .jpg ");
            return false;
        }
        if (e[1].size > 10e6) {
            window.alert("Please upload a file smaller than 10 MB");
            return false;
        }
        return URL.createObjectURL(e[1]);
    });
    callback(ImagesArray);
}

export async function AddUserToGroup(data, callback) {
    return groupsService.addMember(data)
        .then((res) => {
            return callback(res);
        });
}

export default function GetCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem('user'))
    if (!currentUser) {
        var guestData = {
            _id: Math.floor(100000 + Math.random() * 900000),
            name: "Guest",
            firstname: "Guest",
            lastname: "",
            photo: require('./img/giftie_question.png')
        }
        localStorage.setItem('user', JSON.stringify(guestData));
    }
    return currentUser;
}

export const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLS = key => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}

export const SortItemsByField = (field, sort, data) => {
    const sortedItems = data.sort((a, b) => {
        // Access the field value within each object
        const fieldValueA = a[field].toLowerCase();
        const fieldValueB = b[field].toLowerCase();

        // Customize the comparison logic based on your sorting requirements
        if (fieldValueA < fieldValueB) {
            return sort ? -1 : 1;
        }
        if (fieldValueA > fieldValueB) {
            return sort ? 1 : -1
        }
        return 0; // fieldValueA and fieldValueB are considered equal
    });

    return sortedItems;
};