# Random Table Topic Generator

Random Table Topic Generator generates a random number of table topics depending on the number submitted, and the categories chosen.

As a member of ToastMasters we are periodically asked to answer a “Table Topic” question. Table Topic questions impromptu questions that are asked to various people. The purpose of table topics is to have members "think on their feet" and speak for one to two minutes. This can help people prepare for unexpected questions that may be asked during job interviews, news interviews, and business meetings. These questions normally last one to two minutes.

## Installation

`npm i table-topic-generator --save`

## Usage

This will return a JSON file with the table topics and a message.
```
const tableTopicGenerator = require('table-topic-generator');

tableTopicGenerator(2, "Summer", "Vacation");

```
### Returns
```
{
  Message: 'We were able to produce your requested table topics',
  Table_Topics: [
    "Share some trips that you've had during summer.",
    'Which do you enjoy more, winter vacation or summer vacation? Why?'
  ]
}
```

## Categories
### Below are the valid categories this API recognizes:
Cold	Warm	Hot        Religion        Home        Family        Friends        Love        Hate        Political        Time        Literature        Pop Culture        Emotions        Current Events        How-To        Music        History        Education        Health        Money        Self        Celebration        Food        Holiday        Vacation        Finish/Fill in the blank        Indoor        Outdoor        Task        Opinion        Controversy        Hobby        Mental Health        Confidence        Nature        Vintage        Religion        Fiction        Non-Fiction        Law        Animals        People        Criticism        Career        Sports        Recreation        Children        Adults        Happy        Sad        Art        Technology        Favorite        Motivation/Inspiration        Winter        Fall        Spring        Summer        Memories 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contact Information for the Programmer
### Name: Akeem Adkins
### E-Mail: adkinsakeem@gmail.com
### GitHub: https://github.com/adkinsakeem/


## More Information
#### For more information on ToastMasters, visit their site at [https://toastmasters.csod.com/](https://toastmasters.csod.com/)