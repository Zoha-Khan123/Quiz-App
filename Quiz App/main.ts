#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";



console.log(chalk.bold.greenBright("\n<<<<<<<<<<<<<<<<<  QUIZ APP <<<<<<<<<<<<<<<<<<<<"));

console.log(chalk.bold.cyanBright("\n<<<<<<<<<<<<<<<<< Registration <<<<<<<<<<<<<<<<<<<<"));

let loop = true;
let storeData = [];   //Student all data stored
let score: number = 0
let selectRollNo = 4001;
let storeResult: number;
let pushScore = []    //Number of result store in this array

while (loop) {

    score = 0  //Yaha score 0 is liya likha ha q ka jub doobara loop start hoga to score ma jitne value store hoge wo reset hojaige


    let choices = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Select one",
            choices: ["Registration", "Admit Card", "Search Result", "List Of Result", "Exit"]
        }
    ])

    class Result {
        name: string;
        email: string;
        password: number;
        course: string[];
        timing: number;
        totalScore: number;
        rollNo: number;

        constructor(name: string, email: string, password: number, course: string[], timing: number, totalScore: number) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.course = course;
            this.timing = timing;
            this.totalScore = score;
            this.rollNo = selectRollNo++
        }
    }

    //=============================================== Registration =====================================================
    if (choices.select === "Registration") {

        const enter = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name",
                validate: function (value) {
                    if (!value.trim()) {
                        return (chalk.bold.redBright(("Please enter your name.")));
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "Email",
                validate: function (value) {
                    if (!value.trim()) {
                        return (chalk.bold.redBright(("Please enter your email.")));
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "passsword",
                message: "Password",
                validate: function (value) {
                    if (!value.trim()) {
                        return (chalk.bold.redBright(("Please enter your password.")));
                    }
                    return true;

                }
            },
            {
                type: "list",
                name: "course",
                message: "Choose Your Course",
                choices: ["WordPress", "Web Developnment", "Artifical Intelligence", "Machine Learning"]
            },

            {
                type: "list",
                name: "timing",
                message: "Select Time",
                choices: ["Monday 9:00am to 12:00pm", "Monday 2:00pm to 5:00pm",
                    "Thursday 9:00am to 12:00pm", "Thursday 2:00pm to 5:00pm",
                    "Saturday 9:00am to 12:00pm", "Saturday 2:00pm to 5:00pm"]
            }
        ])


        let p1 = new Result(enter.name, enter.email, enter.passsword, enter.course, enter.timing, enter.totalScore);
        storeData.push(p1)


        console.log(chalk.bold.cyanBright("\n<<<<<<<<<<<<<<<<< Registration Complete <<<<<<<<<<<<<<<<<<<<"));

        //========================================= Quiz ==============================================================

        console.log(chalk.bold.greenBright("\n\n<<<<<<<<<<<<<<<<<<<<< Start Quiz <<<<<<<<<<<<<<<<<<<<<<<<<"));

        console.log(chalk.bold.cyanBright("\n\n<<<<<<<<<<<<<<<<< You have 2 categories <<<<<<<<<<<<<<<<<<<"));


        console.log(chalk.bold.greenBright("\n1) English \n2) General Knowledge\n\n"));


        console.log(chalk.bold.yellowBright("<<<<<<<<<<<<<<<<<<<<<< First Categorie English <<<<<<<<<<<<<<<<<<<<<<<<"));


        const English = await inquirer.prompt([
            {
                type: "list",
                name: "question1",
                message: '\nWhat is the plural of "child"?',
                choices: ["a)Childs", "b)Childen", "c)Children", "d)Childers"]   //children
            },
            {
                type: "list",
                name: "question2",
                message: 'Which of the following is a synonym for "happy"?',
                choices: ["a)Sad", "b)Joyful", "c)Angry", "d)Gloomy"]           //joyful
            },
            {
                type: "list",
                name: "question3",
                message: 'What is the past tense of "go"?',
                choices: ["a)Went", "b)Gone", "c)Goed", "d)Going"]      //went
            },
            {
                type: "list",
                name: "question4",
                message: 'Which of the following is an example of conjuction?',
                choices: ["a)And", "b)Run", "c)Quickly", "d)Happy"]         //and
            },
            {
                type: "list",
                name: "question5",
                message: 'What is the comparative form of the adjective "good"?',
                choices: ["a)Well", "b)Best", "c)Better", "d)Gooder"]            //better
            }
        ])

        console.log(chalk.bold.yellowBright("\n<<<<<<<<<<<<<<<<<<<<<< Second Categorie G.K <<<<<<<<<<<<<<<<<<<<<<<<"));

        const GeneralKnowledge = await inquirer.prompt([
            {
                type: "list",
                name: "question6",
                message: '\nWhat is the capital of Australia?',
                choices: ["a)Sydney", "b)Melbourne", "c)Canberra", "d)Brisbane"]    //Canberra
            },
            {
                type: "list",
                name: "question7",
                message: 'What is the longest river in the world?',
                choices: ["a)Amazon River", "b)Nile River", "c)Mississippi River", "d)Yangtze River"]    //Nile
            },
            {
                type: "list",
                name: "question8",
                message: 'What is the chemical symbol for water?',
                choices: ["a)C2O", "b)NaCl", "c)O2", "d)H2O"]    //H2O
            },
            {
                type: "list",
                name: "question9",
                message: 'What is the largest planet in our solar system?',
                choices: ["a)Earth", "b)Jupiter", "c)Saturn", "d)Mars"]   //Jupiter
            },
            {
                type: "list",
                name: "question10",
                message: 'Is cucumber?',
                choices: ["a)Fruit", "b)Vegetable", "c)Dry Fruit", "d)Berry"]   //Fruit
            },
        ])

        //Quiz Answers

        if (English.question1 === "c)Children") {

            ++score
        }
        if (English.question2 === "b)Joyful") {
            ++score
        }
        if (English.question3 === "a)Went") {
            ++score
        }
        if (English.question4 === "a)And") {
            ++score
        }
        if (English.question5 === "c)Better") {
            ++score
        }
        if (GeneralKnowledge.question6 === "c)Canberra") {
            ++score
        }
        if (GeneralKnowledge.question7 === "b)Nile River") {
            ++score
        }
        if (GeneralKnowledge.question8 === "d)H2O") {
            ++score
        }
        if (GeneralKnowledge.question9 === "b)Jupiter") {
            ++score
        }
        if (GeneralKnowledge.question10 === "a)Fruit") {
            ++score

        }
        console.log(chalk.bold.yellowBright("\n==================================Quiz Complete================================\n"));

        storeResult = score    //score ko baki jaga access karnay ka liya (storeResult) ka variable banaya ha jisay pehlay bahar declare kiya ha or ander reassign kiya ha.
        pushScore.push(storeResult) //phir is (storeResult) ma jo score hoga usay bahar walay array jis ka name (pushScore) ha us ma push kardangay or phir (pushScore) ko hum kahe bhe use kar saktay han 


        //=========================================== Admit Card =====================================

    } else if (choices.select === "Admit Card") {


        for (let admitCard of storeData) {

            console.log(chalk.bold.cyanBright("\n=======================================================================\n"));
            console.log(chalk.bold.greenBright("                             Admit Card                               \n"));
            console.log(chalk.bold.cyanBright("======================================================================="));
            console.log((chalk.bold.greenBright("Name: ")) + (chalk.bold.yellowBright(admitCard.name)));
            console.log((chalk.bold.greenBright("Roll No: ")) + (chalk.bold.yellowBright(admitCard.rollNo)));
            console.log((chalk.bold.greenBright("Course: ")) + (chalk.bold.yellowBright(admitCard.course)))
            console.log((chalk.bold.greenBright("Timing: ")) + (chalk.bold.yellowBright(admitCard.timing)))
        }



        //======================================List Of Result ====================================================


    } else if (choices.select === "List Of Result") {
        console.log(chalk.bold.cyanBright("\n>>>>>>>>>>>>>>>>> Candidates Result >>>>>>>>>>>>>>>>>>>>>>>>>>>>"));

        for (let i = 0; i < storeData.length; i++) {
            console.log((chalk.bold.greenBright("\nName: ")) + (chalk.bold.yellowBright(storeData[i].name)) + (chalk.bold.greenBright(" Scores: ")) + (chalk.bold.yellowBright(pushScore[i])));
        }

        console.log(chalk.bold.cyanBright("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));



        //====================================== Search Result =======================================================

    } else if (choices.select === "Search Result") {
        const searchResult = await inquirer.prompt([
            {
                type: 'input',
                name: "student",
                message: "Enter your Roll NO",
            }
        ]);

        let found = false;

        for (let student of storeData) {
            if (searchResult.student == student.rollNo) {
                found = true;
                console.log(chalk.bold.magentaBright("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Student Result >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
                console.log((chalk.bold.greenBright("Name: ")) + (chalk.bold.yellowBright(student.name)));
                console.log((chalk.bold.greenBright("Roll No: ")) + (chalk.bold.yellowBright(student.rollNo)));
                console.log((chalk.bold.greenBright("Course: ")) + (chalk.bold.yellowBright(student.course)))
                console.log((chalk.bold.greenBright("Timing: ")) + (chalk.bold.yellowBright(student.timing)))



                // Print the result for this student
                if (pushScore[storeData.indexOf(student)] < 5) {
                    console.log(chalk.bold.redBright("\n>>>>>>>>>>>>>>>>>>>> 😞 Sorry, You are Fail.Better Luck Next Time ⏳. >>>>>>>>>>>>>>>>>>>>>>>>>"));
                    console.log(chalk.bold.redBright(`                            Your Total Score is ${pushScore[storeData.indexOf(student)]}/10`));
                } else {
                    console.log(chalk.bold.greenBright("\n>>>>>>>>>>>>>>>>>>>>  🎉🎊 Congratulations You are Passed 💫✨ >>>>>>>>>>>>>>>>>>>>>>>>>"));
                    console.log(chalk.bold.greenBright(`                            Your Total Score is ${pushScore[storeData.indexOf(student)]}/10`));
                }

                break; // Exit loop once student is found
            }
        }

        if (!found) {
            console.log(chalk.bold.redBright("Not Found"));
        }


        //========================================== Exit ==============================================================
    } else {
        break;
    }

}















