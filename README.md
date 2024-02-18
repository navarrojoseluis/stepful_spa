# STEPFUL SPA

## Getting started

### Prerequisites

```
Node v21.6.0
```

Install dependencies

```sh
npm install
```

## Running the Application

Before running the application, ensure that the `STEPFUL API` is running locally on port 3000. The SPA will run on port 3001.

```sh
npm run start
```

Visit:

```sh
http://localhost:3001/?id={USER_ID}
```

Remember to replace `{USER_ID}` with the actual user ID.

## Testing

Before running tests, ensure that the `STEPFUL API` is running. The current tests use data stored in the database provided by the API.

Run cypress:

```sh
npm run cy:open
```

Click on E2E Testing, select Electron, and click `Start E2E Testing in Electron`. Run the `UserPage.cy.ts` test.

## STEPFUL SPA

Stepful SPA has two modes of use: `Student` and `Coach`. The page dynamically renders the Coach or Student Page based on the provided user ID.

### Students

You can use user IDs `3` or `4` to load the page. Students will see their calendar on the left and available times on the right. They can click the `Book` button to reserve a slot.

### Coaches

You can use user IDs `1` or `2` to load the page. Coaches will see their calendar, indicating free or booked slots. They can view students' satisfaction and notes for past calls. To add slots, select the start time and click the `Create Slot` button.
