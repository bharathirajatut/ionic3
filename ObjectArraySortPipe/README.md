# Object Array Sort Ascending Order

You can easily sort your array of objects using this pipe in Ionic 2&3.

### Step1.

Create pipe using below command

`ionic g pipe ascending'

### Step2.

Copy and paste the transform code from the sort-pipe.ts file

### Step3.

Add the pipe to app.module.ts file

### Step4.

Create html view using the reverse.

```
<ion-item *ngFor="let myObj of myArr | ascending:'fieldName'">

</ion-item>
```

Here ascending is the pipe name.

fieldName will be your object property name

Enjoy :-)
