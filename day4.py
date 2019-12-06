# %%
import re
starting_number = 165432
ending_number = 707912


# %%
testing_set = [558567, 558568, 558569, 558575, 558576,111111,122345]
values = []
for num in range(starting_number, ending_number):
    string = [int(x) for x in str(num)]
    starting_i = string[0]
    double_counter = 0
    indicator = True
    for i in string:
        if i >= starting_i:
            if i == starting_i :
                double_counter += 1
            else:
                starting_i = i
        else:
            indicator = False
            starting_i = i
            break
    double_counter = double_counter - 1
    if double_counter > 0 and indicator == True:
        values.append(num)
    else:
        continue
    print(num,indicator,double_counter)



# Part 2 -------------------------------------------
# %%
def unique_list(data):
    unique = []
    for x in data:
# %% 
def unique_counter(set_list, data_list):
    counter_list = []
    for i in set_list:
        count = data_list.count(i)
        counter_list.append(count)
    return counter_list

# %%
testing_set = [112233,123444,111122,11111,1223456,223450]
values = []
for num in range(starting_number, ending_number):
    string = [int(x) for x in str(num)]
    unique_set = set(string)
    counter_set = unique_counter(unique_set,string)
    add_flag=False
    for i in range(1,len(string)):
        if string[i] >= string[i-1] and len(unique_set) < len(string):
            add_flag=True
        else:
            add_flag=False
            break 
    if add_flag == True and (counter_set.count(2) >= 2 or (counter_set.count(2)==1 and (counter_set.count(3)==0 or counter_set.count(5)==0))) :
        values.append(num)
    else:
        continue
print(values)
print(len(values))

# %%
and not(re.search(occurence,str(num)))

That's not the right answer; your answer is too low. If you're stuck, make sure you're using the full input data; there are also some general tips on the about page, or you can ask for hints on the subreddit. Please wait one minute before trying again. (You guessed 967.) [Return to Day 4]