from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()

#Test Case 0: Verifying incorrect login credentials
def test_incorrect_login():
    driver.get("http://todo-with-login.vercel.app/login")
    username_input = driver.find_element(By.CLASS_NAME, "username")
    password_input = driver.find_element(By.CLASS_NAME, "password")
    login_button = driver.find_element(By.CLASS_NAME, "login-button")
    
    username_input.send_keys("wrong_username")
    password_input.send_keys("wrong_password")
    time.sleep(3)
    login_button.click()
    time.sleep(4)
    alert = driver.switch_to.alert
    #alert.send_keys(Keys.ENTER) #Keys.RETURN is the same as pressing Enter
    alert.accept()
        
#Test Case 1: Verifying login functionality
def test_login():
    driver.get("http://todo-with-login.vercel.app/login")
    username_input = driver.find_element(By.CLASS_NAME, "username")
    password_input = driver.find_element(By.CLASS_NAME, "password")
    login_button = driver.find_element(By.CLASS_NAME, "login-button")
    
    username_input.send_keys("fester")
    password_input.send_keys("fester")
    time.sleep(3)
    login_button.click()
    time.sleep(4)
    
    assert driver.current_url == "https://todo-with-login.vercel.app/todo"

#Test Case 2: Adding task to the To-Do list
def test_add_task():
    driver.get("https://todo-with-login.vercel.app/todo")
    add_button = driver.find_element(By.CLASS_NAME, "add-todo")
    task_input = driver.find_element(By.CLASS_NAME, "input-todo")
    
    task_input.send_keys("Buy groceries.")
    time.sleep(3)
    add_button.click()
    time.sleep(3)
    
    todo_list = driver.find_element(By.CLASS_NAME, "todos")
    assert "Buy groceries." in todo_list.text
    
#Test Case 3: Marking a task as Completed from the To-Do list
def test_mark_task_completed():
    driver.get("https://todo-with-login.vercel.app/todo")
    done_button = driver.find_element(By.CLASS_NAME, "card-done") 
    
    done_button.click()
    time.sleep(3)
    
    completed_list = driver.find_element(By.CLASS_NAME, "completed")
    assert "Buy groceries." in completed_list.text
    
#Test Case 4: Deleting a task from the To-Do list
def test_delete_task():
    driver.get("https://todo-with-login.vercel.app/todo")
    delete_button = driver.find_element(By.CLASS_NAME, "card-done")
    
    delete_button.click()
    time.sleep(3)
    
    todo_list = driver.find_element(By.CLASS_NAME, "todos")
    completed_list = driver.find_element(By.CLASS_NAME, "completed")
    assert "Buy groceries." not in todo_list.text
    assert "Buy groceries." not in completed_list.text
    
#Executing the test cases
test_incorrect_login()
test_login()
test_add_task()
test_mark_task_completed()
test_delete_task()

#Close the WebDriver instance
driver.close()
    
