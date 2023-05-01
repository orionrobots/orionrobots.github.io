import Tkinter as tk
import functools

class ColumnChild(object):

    def __init__(self, label, get_children=None):
        self.label = label
        self.get_children = get_children

    def __str__(self):
        return self.label


class ColumnViewGadget(tk.Frame):

    def create_widgets(self):
        self.scrollbar = tk.Scrollbar(self, orient = tk.HORIZONTAL)
        self.scrollbar.grid(row=1, column=0, columnspan=2, sticky=tk.W + tk.E)

        self.canvas = tk.Canvas(self, xscrollcommand=self.scrollbar.set)
        self.canvas.grid(row=0, column=0)
        self.scrollbar.config(command=self.canvas.xview)
        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)

        self.fr = tk.Frame(self.canvas)
        self.fr.rowconfigure(0, weight=1)
        self.fr.columnconfigure(0, weight=1)
        self.fr.pack()

        self.lists_view = [tk.Listbox(self.fr)]
        self.lists_view[0].grid(row=0, column=0, sticky= "WE")

        self.lists_view.append(tk.Listbox(self.fr))
        self.lists_view[1].grid(row=0, column=1, sticky= "WE")

        self.lists_view[0].bind("<<ListboxSelect>>", self.on_select)
        self.lists_view[0].bind("<Right>", lambda _:self.lists_view[1].focus_set())
        self.lists_view[1].bind("<Left>", lambda _:self.lists_view[0].focus_set())

    def __init__(self, master=None):
        tk.Frame.__init__(self, master)
        self.create_widgets()

    def set_children(self, child_list):
        self.child_list = list(child_list)
        self.lists_view[0].delete(0, tk.END)
        for item in self.child_list:
            self.lists_view[0].insert(tk.END, item)

    def on_select(self, evt):
        w = evt.widget
        index = int(w.curselection()[0])
        value = self.child_list[index]
        self.child_selected(value)

    def child_selected(self, child):
        self.lists_view[1].delete(0, tk.END)
        if child.get_children:
            for item in child.get_children():
                self.lists_view[1].insert(tk.END, item)

class Application(tk.Frame):

    def show_visited(self):
        print("Showing visited")

    def show_bad_links(self):
        print("Showing bad links")

    def start(self):
        print("Starting/resuming scan")

    def populate_list(self):

        def get_children(name):
            return [ColumnChild("%s subitem %d" % (name, n)) for n in range(50)]
        def make_entry(name):
            return ColumnChild(name, functools.partial(get_children, name))
        self.column_view.set_children(make_entry("item % d" % n) for n in range(50))

    def create_widgets(self):
        self.start_stop = tk.Button(self, text='Start', command=self.start)
        self.start_stop.grid(row=0, column=0, sticky='WE')

        self.root_address = tk.Entry(self)
        self.root_address.grid(row=0, column=1, sticky='WE')

        self.view_visited = tk.Button(self, text = 'Visited', command = self.show_visited)
        self.view_visited.grid(row=1, column=0, sticky='WEN')

        self.view_badlinks = tk.Button(self, text = 'Bad Links', command = self.show_bad_links)
        self.view_badlinks.grid(row=2, column=0, sticky='WEN')

        self.column_view = ColumnViewGadget(self)
        self.column_view.grid(row=1, column=1, rowspan=2)
        self.populate_list()

        self.grid_rowconfigure(1, weight=1)
        self.grid_columnconfigure(1, weight=1)

    def __init__(self, master=None):
        tk.Frame.__init__(self, master)
        self.pack()
        self.create_widgets()
        master.title("Orion Link Checker")

root = tk.Tk()
app = Application(master=root)
app.mainloop()
