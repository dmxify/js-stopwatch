<a name="Stopwatch"></a>

## Stopwatch
**Kind**: global class  

* [Stopwatch](#Stopwatch)
    * [new Stopwatch(options)](#new_Stopwatch_new)
    * [.start()](#Stopwatch+start)
    * [.stop()](#Stopwatch+stop)
    * [.reset()](#Stopwatch+reset)
    * [.restart()](#Stopwatch+restart)

<a name="new_Stopwatch_new"></a>

### new Stopwatch(options)

| Param | Type | Description |
| --- | --- | --- |
| options |  |  |
| options.alarm | <code>callback</code> | callback function to execute when Stopwatch's elapsed time is reached |
| options.timeAlarmMS | <code>number</code> | time in milliseconds before alarm callback is executed. |

<a name="Stopwatch+start"></a>

### stopwatch.start()
Starts the stopwatch

**Kind**: instance method of [<code>Stopwatch</code>](#Stopwatch)  
<a name="Stopwatch+stop"></a>

### stopwatch.stop()
Stops the stopwatch

**Kind**: instance method of [<code>Stopwatch</code>](#Stopwatch)  
<a name="Stopwatch+reset"></a>

### stopwatch.reset()
Stops the stopwatch and clears elapsed time

**Kind**: instance method of [<code>Stopwatch</code>](#Stopwatch)  
<a name="Stopwatch+restart"></a>

### stopwatch.restart()
Resets (stop and clear elapsed time) and starts the stopwatch again

**Kind**: instance method of [<code>Stopwatch</code>](#Stopwatch)  
