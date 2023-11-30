select distinct ist.name, sc.building, sc.room_number from instructor as ist
inner join teaches as tc on tc.id = ist.id
inner join section as sc on sc.sec_id = tc.sec_id
