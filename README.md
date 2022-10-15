# VMPoroSadScript Бочаров КНМО-101
# Набор команд в PoroSadScript:
# set value index - инициализирует значение value в ячейку под номером value
# copy first_index second_index - копирует значение из ячейки с номером first_index в ячейку
с номером second_index
# input index - помещает значение ввода в ячейку с номером index
# output index - выводит значение из ячейки с номером index
# goif if_index go_index - перемещает исполнение программы в go_index, если ячейка с номером if_index true
# goto go_index - перемещает управление программы в go_index
# increment index - увеличивает значение в ячейке index на 1
# sum first_index second_index third_index - складывает значения из ячеек с номерами first_index и second_index и помещает результат в ячейку с номером third_index
# sub first_index second_index third_index - вычитает значение ячейки с номером second_index из ячейки с номером first_index и помещает результат в ячейку с номером third_index
# isless first_index second_index third_index - сравнивает меньше ли значение в ячейке с номером first_index значения в ячейке с номером second index и помещает результат в ячейку с номером third_index
# isequal first_index second_index third_index - сравнивает равны ли значения в ячейках с номерами first_index и second_index и помещает результат в ячейку с номером third_index
# quit - завершает выполнение
# Для удобства использования "$" обозначает номер ячейки в исходном тексте программы, в свою очередь числа без "$" обозначают номера ячеек после исходного набора команд, так же в команде set "$" используется для того, чтобы визуально быстрее отличать, что является номером ячейки, а что реальным значением.
